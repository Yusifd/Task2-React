import './Profile.css'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import PersonalInfo from './PersonalInfo'


function Product() {
  let email=['yusif@davidov.mail.ru']
  let name=['Yusif']
  let address=['Xatai rayon']
  let info=['klgjdjlgjdfkgh']

  return (
    <>
    <Email arrayEmail={email} />
    <Name arrayName={name}/>
    <Address arrayAddress={address}/>
    <PersonalInfo arrayInfo={info}/>
    </>
  )
}

export default Product
