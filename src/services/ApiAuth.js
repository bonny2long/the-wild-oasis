import supabase, { supabaseUrl } from './supabase';

export async function signUp({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: '',
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  let updateData = {};
  if (password) updateData.password = password;
  if (fullName) updateData.data = { fullName };

  // Update password or fullName
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  // If no avatar, return fresh user
  if (!avatar) {
    const { data: freshUser, error: freshError } =
      await supabase.auth.getUser();
    if (freshError) throw new Error(freshError.message);
    return freshUser.user;
  }

  // Upload avatar
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from('avatars')
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // Update avatar URL in user metadata
  const { error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);

  // Fetch fresh user again so React Query has latest data
  const { data: freshUser2, error: freshError2 } =
    await supabase.auth.getUser();
  if (freshError2) throw new Error(freshError2.message);

  return freshUser2.user;
}
