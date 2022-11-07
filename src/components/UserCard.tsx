type UserCardProps = {
  src?: string;
  name: string;
};
export const UserCard = ({ src, name }: UserCardProps) => {
  return (
    <ul>
      <li className="flex items-center">
        <img
          className="w-10 h-10 object-cover rounded-full"
          src={src}
          alt="avatar"
        />
        <p>
          <a className="text-gray-700 font-bold mx-1 hover:underline" href="#">
            {name}
          </a>
          <span className="text-gray-700 text-sm font-light">
            Created 23 Posts
          </span>
        </p>
      </li>
    </ul>
  );
};
