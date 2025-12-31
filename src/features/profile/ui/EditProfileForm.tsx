import { useEditProfile } from "../hooks/useEditProfile";
import PreviewUserData from "./PreviewUserData";
import UpdateUserForm from "./UpdateUserForm";

const EditProfileForm = () => {
  const { formData, updateFormData, handleSubmit } = useEditProfile();

  return (
    <>
      <section className="sticky top-0 z-50 rounded-lg bg-black/50 pt-2.5 backdrop-blur-sm">
        <PreviewUserData
          imageUrl={formData.imageUrl}
          username={formData.username}
          bio={formData.bio}
        />
      </section>
      <section>
        <UpdateUserForm formData={formData} onChange={updateFormData} onSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default EditProfileForm;
