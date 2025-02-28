import './App.css'
import { UIVariantsEnum } from '../lib/enums/ui-variants';
import { SushiButton } from '../lib/main'
import { SushiIcon } from '../lib/components/SushiIcon';
import { UIIconsEnum } from '../lib/enums/ui-icons';
import { UISizesEnum } from '../lib/enums/ui-sizes';

function App() {
  return (
    <>
      <SushiIcon icon={UIIconsEnum.APPROVE} size={UISizesEnum.M}></SushiIcon>
      <SushiButton variant={UIVariantsEnum.PRIMARY} leftIcon={UIIconsEnum.APPROVE} rightIcon={UIIconsEnum.NEXT} label='ปุ่ม Primary'></SushiButton>
      <br/>
      <SushiButton variant={UIVariantsEnum.PRIMARY} label='ปุ่ม Primary'></SushiButton>
      <SushiButton variant={UIVariantsEnum.PRIMARY} disabled label='ปุ่ม Primary disabled'></SushiButton>
      <br/>
      <SushiButton variant={UIVariantsEnum.SECONDARY} label='ปุ่ม Secondary'></SushiButton>
      <SushiButton variant={UIVariantsEnum.SECONDARY} disabled label='ปุ่ม Secondary disabled'></SushiButton>
      <br/>
      <SushiButton variant={UIVariantsEnum.LINK} label='ปุ่ม Link'></SushiButton>
      <SushiButton variant={UIVariantsEnum.LINK} disabled label='ปุ่ม Link disabled'></SushiButton>
      <br/>
      <SushiButton variant={UIVariantsEnum.BLACK} label='ปุ่ม Black'></SushiButton>
      <SushiButton variant={UIVariantsEnum.BLACK} disabled label='ปุ่ม Black disabled'></SushiButton>
      <br/>
      <SushiButton variant={UIVariantsEnum.RED} label='ปุ่ม Red'></SushiButton>
      <SushiButton variant={UIVariantsEnum.RED} disabled label='ปุ่ม Red disabled'></SushiButton>
      <br/>
      <SushiButton variant={UIVariantsEnum.GREEN} label='ปุ่ม Green'></SushiButton>
      <SushiButton variant={UIVariantsEnum.GREEN} disabled label='ปุ่ม Green disabled'></SushiButton>
      <br/>
      <SushiButton variant={UIVariantsEnum.YELLOW} label='ปุ่ม Yellow'></SushiButton>
      <SushiButton variant={UIVariantsEnum.YELLOW} disabled label='ปุ่ม Yellow disabled'></SushiButton>
      <br/>
      <SushiButton variant={UIVariantsEnum.BLUE} label='ปุ่ม Blue'></SushiButton>
      <SushiButton variant={UIVariantsEnum.BLUE} disabled label='ปุ่ม Blue disabled'></SushiButton>
      <br/>
      <SushiButton variant={UIVariantsEnum.PURPLE} label='ปุ่ม Purple'></SushiButton>
      <SushiButton variant={UIVariantsEnum.PURPLE} disabled label='ปุ่ม Purple disabled'></SushiButton>
      <br/>
    </>
  )
}

export default App
