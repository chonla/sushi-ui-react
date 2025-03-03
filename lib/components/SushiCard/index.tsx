import styles from './styles.module.scss'

export type SushiCardProps = {
    children: React.ReactNode;
}

function SushiCard(props: SushiCardProps) {
    const { children } = props;
    return (
        <div className={`${styles.container}`}>
            {children}
        </div>
    )
}

export type SushiCardHeaderProps = {
    children: React.ReactNode;
}

function SushiCardHeader(props: SushiCardHeaderProps) {
    const { children } = props;
    return (
        <div className={`${styles.header}`}>
            {children}
        </div>
    )
}

SushiCard.Header = SushiCardHeader;

export { SushiCard }