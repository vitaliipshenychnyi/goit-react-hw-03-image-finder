import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      height="50"
      width="50"
      radius="28"
      color="#3f51b5"
      ariaLabel="watch-loading"
      visible={true}
    />
  );
};
