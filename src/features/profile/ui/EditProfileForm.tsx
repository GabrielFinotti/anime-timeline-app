import { useEditProfile } from "../hooks/useEditProfile";
import PreviewUserData from "./PreviewUserData";
import UpdateUserForm from "./UpdateUserForm";

const EditProfileForm = () => {
  const { formData, updateFormData, handleSubmit } = useEditProfile();

  return (
    <>
      <section className="sticky top-2.5 z-50 rounded-lg bg-black/50 backdrop-blur-sm">
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
