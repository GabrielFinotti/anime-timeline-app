import { tv, VariantProps } from "tailwind-variants";

const updateUserFormStyles = tv({
  base: "",
});

type UpdateUserFormProps = VariantProps<typeof updateUserFormStyles>;

const UpdateUserForm = (props: UpdateUserFormProps) => {
  return <form className={updateUserFormStyles(props)}></form>;
};

export default UpdateUserForm;
