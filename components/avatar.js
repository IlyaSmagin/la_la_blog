import Image from 'next/image'
export default function Avatar({ name }) {
  return (
    <div className="flex items-start">
      <div className="text-md">{name}</div>
    </div>
  )
}
