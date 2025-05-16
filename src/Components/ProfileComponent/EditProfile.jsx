import axios, { Axios } from "axios";
import { DEFAULT_PHOTO, SERVER_DOMAIN } from "../../utils/constants";
import { useState } from "react";
import { addUserData } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [skills, setSkills] = useState(user.skills);
  const [about, setAbout] = useState(user.about);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photoPath, setPhotoPath] = useState(user.photoPath);

  const saveChanges = async () => {
    try {
      const user = await axios.patch(
        SERVER_DOMAIN + "/profile/edit",
        {
          firstName,
          lastName,
          skills,
          about,
          gender,
          photoPath,
          age
        },
        {
          withCredentials: true
        }
      );

      dispatch(addUserData(user.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <fieldset className='fieldset bg-base-200 border-base-300 h-fit rounded-box w-xs border p-4'>
        <legend className='fieldset-legend'>Page details</legend>

        <label className='label'>First Name</label>
        <input
          type='text'
          className='input'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className='label'>Last Name</label>
        <input
          type='text'
          className='input'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>Gender</legend>
          <select
            onChange={(e) => {
              setGender(e.target.value);
              console.log(e.target.value);
            }}
            className='select'
            value={gender}>
            <option>Select your Gender </option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='others'>Other</option>
          </select>
        </fieldset>
        <label className='label'>Age</label>
        <input
          type='number'
          className='input'
          placeholder='age  '
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label className='label'>Skills</label>
        <input
          type='textArea'
          className='input'
          placeholder='Add your skills'
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <label className='label'>Photo URL</label>
        <input
          type='text'
          className='input'
          placeholder='Skills'
          value={photoPath}
          onChange={(e) => setPhotoPath(e.target.value)}
        />
        <legend className='fieldset-legend'>About</legend>
        <textarea
          className='textarea h-24'
          placeholder='Describe yourself'
          value={about}
          onChange={(e) => setAbout(e.target.value)}></textarea>
        <div className='label'>Optional</div>

        <button
          className='btn join-item rounded-md mt-2 bg-green-600'
          onClick={saveChanges}>
          save
        </button>
      </fieldset>
    </>
  );
};

export default EditProfile;
