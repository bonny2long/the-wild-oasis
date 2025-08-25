import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateCurrentUser } from '../../services/ApiAuth';

export function useUpdatedUser() {
  const queryClient = useQueryClient();

  const { mutate: updatedUser, isLoading: isUpdatingUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (newUser) => {
      toast.success('User successfully updated ✅');

      // Update cache immediately for instant UI feedback
      queryClient.setQueryData(['user'], newUser);

      // Also refetch to ensure sync with Supabase
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdatingUser, updatedUser };
}
