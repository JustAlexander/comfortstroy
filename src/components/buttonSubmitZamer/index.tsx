import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
}

const ButtonSubmitZamer = ({ modifier, children, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = `group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`;

  return (
    <button type="submit" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default ButtonSubmitZamer;
