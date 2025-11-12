import typography from '../styles/typography.module.css';




const variants = {

    h1: typography.headline1,
    h2: typography.headline2,
    h3: typography.headline3,
    h4: typography.headline4,

    t1: typography.title1,
    t1B: typography.title1Bold,
    t2: typography.title2,
    t2B: typography.title2Bold,

    bodyL: typography.bodyLarge,
    bodyLB: typography.bodyLargeBold,
    bodyM: typography.bodyMedium,
    bodyMB: typography.bodyMediumBold,
    bodyS: typography.bodySmall,
    bodySB: typography.bodySmallBold,

}

export default function Text_Type({ variant = 'bodyM', as = 'p', children, className = '' }) {

    const Component = as;
    const variantClass = variants[variant] || variants.body;

    return (
        <Component className={`${variantClass} ${className}`}>{children}</Component>

    )
}