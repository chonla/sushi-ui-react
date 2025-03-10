import './App.css'
import { UIVariantsEnum } from '../lib/enums/ui-variants';
import { SushiButton } from '../lib/main'
import { SushiIcon } from '../lib/components/SushiIcon';
import { UIIconsEnum } from '../lib/enums/ui-icons';
import { UISizesEnum } from '../lib/enums/ui-sizes';
import { SushiTooltips } from '../lib/components/SushiTooltips';
import { UIPositionsEnum } from '../lib/enums/ui-positions';

function App() {
  return (
    <>
      <div style={{"width": '250px', 'display':'block', 'flexDirection': 'column', 'justifyContent': 'center'}}>
        <SushiIcon icon={UIIconsEnum.APPROVE} size={UISizesEnum.M}></SushiIcon>
        <SushiButton variant={UIVariantsEnum.PRIMARY} leftIcon={UIIconsEnum.APPROVE} rightIcon={UIIconsEnum.NEXT} label='ปุ่ม Primary มี 2 ไอคอน'></SushiButton>
        <SushiButton variant={UIVariantsEnum.PRIMARY} rightIcon={UIIconsEnum.NEXT} label='ปุ่ม Primary มีไอคอนขวา'></SushiButton>
        <SushiButton variant={UIVariantsEnum.PRIMARY} leftIcon={UIIconsEnum.APPROVE} label='ปุ่ม Primary มีไอคอนซ้าย'></SushiButton>
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
      </div>
      <div style={{"width": '100vw', 'display':'flex', 'flexDirection': 'column', 'justifyContent': 'center'}}>
        <div style={{"width": '100%', 'display':'flex', 'flexDirection': 'row', 'justifyContent': 'center'}}>
          <SushiTooltips position={UIPositionsEnum.LEFT} tooltips='ข้างซ้าย ทดสอบข้อความ ที่ยาวมาก ๆ สำหรับทูลทิปส์ แค่นี้ก็น่าจะพอเพียง'>
            <SushiIcon icon={UIIconsEnum.INFORMATION} size={UISizesEnum.M}></SushiIcon>
          </SushiTooltips>
          <SushiTooltips position={UIPositionsEnum.TOP} tooltips='ข้างบน ทดสอบข้อความ ที่ยาวมาก ๆ สำหรับทูลทิปส์ แค่นี้ก็น่าจะพอเพียง'>
            <SushiIcon icon={UIIconsEnum.ALERT} size={UISizesEnum.M}></SushiIcon>
          </SushiTooltips>
          <SushiTooltips position={UIPositionsEnum.BOTTOM} tooltips='ข้างล่าง ทดสอบข้อความ ที่ยาวมาก ๆ สำหรับทูลทิปส์ แค่นี้ก็น่าจะพอเพียง'>
            <SushiIcon icon={UIIconsEnum.EURO} size={UISizesEnum.M}></SushiIcon>
          </SushiTooltips>
          <SushiTooltips position={UIPositionsEnum.RIGHT} tooltips='ข้างขวา ทดสอบข้อความ ที่ยาวมาก ๆ สำหรับทูลทิปส์ แค่นี้ก็น่าจะพอเพียง'>
            <SushiIcon icon={UIIconsEnum.VIDEO} size={UISizesEnum.M}></SushiIcon>
          </SushiTooltips>
        </div>
      </div>
      <br/>
      <br/>
      <br/><br/>
    </>
  )
}

export default App
