import Link from 'next/link'

export default (props) => (
    <div>
        <h1>{props.url.query.title}</h1>
        <p>Here is some content.</p>
    </div>
)