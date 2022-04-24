import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, FC } from 'react';

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

interface Props {
    text: string;
    href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();
    // console.log(router); 
    // console.log(asPath);
    //el asPath es el path que esta en la url y sirve ára saver en que pagina estoy
    //si el path es igual al href que le paso, entonces le pongo el estilo


    return (
        <Link href={href}>
            <a style={asPath === href ? style : undefined}>{text}</a>
        </Link>

    )
}
