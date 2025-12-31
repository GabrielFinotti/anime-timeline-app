import { useEditProfile } from "../hooks/useEditProfile";
import PreviewUserData from "./PreviewUserData";
import UpdateUserForm from "./UpdateUserForm";

const EditProfileForm = () => {
  const { formData, updateFormData, handleSubmit } = useEditProfile();

  return (
    <>
      <section>
        <PreviewUserData
          imageUrl={formData.imageUrl}
          username={formData.username}
          bio={formData.bio}
        />
      </section>
      <section>
        <UpdateUserForm
          formData={formData}
          onChange={updateFormData}
          onSubmit={handleSubmit}
        />
      </section>
    </>
  );
};

export default EditProfileForm;
