/**
 * Propstypes for header component.
 */
export interface IHeaderProps {
  title: string;
}

/**
 * HeaderComponent for the heading of the app.
 *
 * @param props Properties for the header props.
 * @returns Header component.
 */
export default function Header(props: IHeaderProps) {
  return (
    <div className="flex-1 p-10 text-4xl font-bold text-orange-700 ">
      {props.title}
    </div>
  );
}
