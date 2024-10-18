import './Card.css';

type Props = {
  authorName: string;
  username: string;
};
export function Card({ authorName, username }: Props) {
  return (
    <div className="max-width-wrapper">
      <div className="card">
        <div className="profile-section">
          <img
            src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/testimonial-card/starter/img/profile-thumbnail.jpg"
            alt="profile"
            className="profile"
          />

          <div className="profile-section-info">
            <h1 className="name">{authorName}</h1>
            <h6 className="username">{`@${username}`}</h6>
          </div>
        </div>
        <blockquote>
          <p>
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </p>
        </blockquote>
      </div>
    </div>
  );
}
