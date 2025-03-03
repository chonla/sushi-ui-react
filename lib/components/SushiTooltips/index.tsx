import { UIPositionsEnum } from '../../enums/ui-positions';
import styles from './styles.module.scss'

export type SushiIconProps = {
    children: React.ReactNode
    tooltips: string
    position?: UIPositionsEnum
};

export function SushiTooltips(props: SushiIconProps) {
    const { tooltips, children, position, ...restProps } = props;
    const tooltipsPosition = position || UIPositionsEnum.RIGHT;
    return (
        <span className={`${styles.tooltips}`} {...restProps}>{children}
            <span className={`${styles.tooltipsText} ${styles[tooltipsPosition]}`}>{tooltips}</span>
        </span>
    );
}