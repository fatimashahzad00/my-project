
import CarHeadlight from '@/components/Headlight'
import Seat from '@/components/Seat'
import CarWheel from '@/components/Wheel'
import styles from './page.module.css'


export default function Home() {
  return (
   <div>
         <div className='bg-blue-700 h-24 w-52 hover:scale-150'></div>
         <CarWheel />
         <CarWheel />
         <CarWheel />
         <CarWheel />
         <CarHeadlight />
         <CarHeadlight />
         <Seat />
         <Seat />
         <Seat />
         <Seat />
   </div>
  )
}
