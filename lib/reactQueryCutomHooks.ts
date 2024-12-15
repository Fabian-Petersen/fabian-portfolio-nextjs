import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./customFetch";
import { toast } from "react-toastify";

// $ Function to Fetch Data from the Server with a GET request
export const useFetchItem = (key: string) => {
  const { isPending, data, isError } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await customFetch.get(`/${key}`);
      return data;
    },
  });
  return { isPending, isError, data };
};

// $ Function to Fetch Data from the Server with a POST request
export const useCreateItem = (key: string) => {
  const queryClient = useQueryClient();
  const {
    mutate: createItem,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (Item: Object) =>
      customFetch.post(`/${key}`, Item, {
        headers: {
          "Content-Type": "application/json", // or 'multipart/form-data' if required
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
      toast.success("item successfully added");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
  return { createItem, isPending, isError };
};

// $ Function to Edit Data from the Server with a PATCH request
export const useEditItem = (key: string) => {
  const queryClient = useQueryClient();

  const { mutate: editItem } = useMutation({
    mutationFn: (itemId) => {
      return customFetch.patch(`/${itemId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
  return { editItem };
};

// $ Function to Delete Data from the Server with a DELETE request
export const useDeleteItem = (key: string) => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isPending: deleteTaskLoading } = useMutation({
    mutationFn: (itemId) => {
      return customFetch.delete(`/${itemId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
  return { deleteTask, deleteTaskLoading };
};
