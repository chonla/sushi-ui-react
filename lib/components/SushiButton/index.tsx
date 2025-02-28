import { UIIconsEnum } from '../../enums/ui-icons';
import { UIVariantsEnum } from '../../enums/ui-variants';
import { SushiIcon } from '../SushiIcon';
import styles from './styles.module.scss'

export type SushiButtonProps = {
    variant: UIVariantsEnum
    label?: string
    leftIcon?: UIIconsEnum
    rightIcon?: UIIconsEnum
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function SushiButton(props: SushiButtonProps) {
    const { variant, leftIcon, rightIcon, label, ...restProps } = props;
    const uiVariant = variant || UIVariantsEnum.PRIMARY;
    if (leftIcon && rightIcon) {
        return (
            <button className={`${styles[uiVariant]}`} {...restProps}>
                <SushiIcon icon={leftIcon} variant={uiVariant}></SushiIcon>
                { label || '' }
                <SushiIcon icon={rightIcon} variant={uiVariant}></SushiIcon>
            </button>
        )
    }
    if (leftIcon) {
        return (
            <button className={`${styles[uiVariant]}`} {...restProps}>
                <SushiIcon icon={leftIcon} variant={uiVariant}></SushiIcon>
                { label || '' }
            </button>
        )
    }
    if (rightIcon) {
        return (
            <button className={`${styles[uiVariant]}`} {...restProps}>
                { label || '' }
                <SushiIcon icon={rightIcon} variant={uiVariant}></SushiIcon>
            </button>
        )
    }
    return (<button className={`${styles[uiVariant]}`} {...restProps}>{ label || '' }</button>);
}