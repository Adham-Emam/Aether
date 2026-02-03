import { Zap } from 'lucide-react'

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary text-white p-2 rounded-md">
        <Zap />
      </div>
      <strong className="text-2xl font-extrabold">AETHER</strong>
    </div>
  )
}
