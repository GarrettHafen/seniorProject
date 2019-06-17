import Link from 'next/link'
const Header = (props) => (
    <li>
        <Link href="/">
            <a>Home</a>
            
        </Link>
        <style jsx>{`
                a {
                    text-decoration: none;
                    color: red;
                }
            `}</style>
    </li>
)

export default Header

