import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, date, author }) {
  return (
    <div className='h-full font-light col-span-2'>
        <div className="mb-2 font-mono text-md">
          <DateFormatter dateString={date} />
        </div>
        <div className="block font-mono mb-2">
          <Avatar name={author.name}/>
        </div>
      <PostTitle>{title}</PostTitle>
    </div>
  )
}
