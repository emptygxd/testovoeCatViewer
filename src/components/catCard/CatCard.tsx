import './catCard.scss';

type Props = {
  url: string | null;
};

export const CatCard = ({ url }: Props) => {
  return (
    <div className="catCard__wrapper">
      {url ? (
        <img className="catCard" src={url} alt="cat" />
      ) : (
        <p className="catCard__loader">Loading...</p>
      )}
    </div>
  );
};
