import { useSelector } from "react-redux";
import Image from "../../atom/Images/Image";

interface ProfileCardProps {
  showErrorMessage?: boolean;
}

export function ProfileCard({ showErrorMessage = true }: ProfileCardProps) {
  const activePatient = useSelector((state: any) => state.activePatient);
  const { patientDetails, contactDetails } = activePatient;
  const name = `${patientDetails.firstName} ${patientDetails.middleName} ${patientDetails.lastName} `;
  const phoneNumber = contactDetails?.preferredPhone ?? "XXXX-XXXXX";
  const profilePath = activePatient.patientDetails.profileImage;
  if (patientDetails.id !== "") {
    return (
      <div className="d-flex justify-content-end">
        <div className="card w-25 mb-3 p-0">
          <div className="card-body d-flex justify-content-start p-2">
            <div className="nav-profile-img1 d-flex flex-column align-items-center">
              <Image
                src={profilePath}
                alt="image"
                height={50}
                width={50}
                className="boborder rounded-circle border-light"
              />
            </div>
            <div className="d-flex flex-column ps-4">
              <h6 className="card-title fw-semibold mb-1">{name}</h6>
              <h5 className="card-title">{phoneNumber}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (showErrorMessage) {
    return (
      <div className="text-danger">
        Error : Please select the Patient to get the information
      </div>
    );
  }
  return <div />;
}
