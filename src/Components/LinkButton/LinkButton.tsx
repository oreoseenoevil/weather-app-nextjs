import Link from 'next/link';
import styles from './LinkButton.module.css';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
}

export const LinkButton = ({ children, href }: LinkButtonProps) => {
  return (
    <Link href={href}>
      <span className={styles.link}>{children}</span>
    </Link>
  );
};
