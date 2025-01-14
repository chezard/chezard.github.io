import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Beginner to Advanced',
        Svg: require('@site/static/img/undraw_docusaurus_react2.svg').default,
        description: (
            <>
                Here, beginner and advanced-level articles and documents on various topics are shared.
                These resources aim to provide in-depth knowledge of complex subjects.
            </>
        ),
    },
    {
        title: 'Supported by Examples',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                The explanations are supported with example code, diagrams, and other resources.
                It’s a step-by-step tutorial designed to help you navigate through advanced topics effectively.
            </>
        ),
    },
    {
        title: 'Open Source',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                For each article and topic, there is a GitHub repository available.
                You can open a Pull Request for any suggestions or improvements you'd like to make.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            {/*<div className="text--center">*/}
            {/*  <Svg className={styles.featureSvg} role="img" />*/}
            {/*</div>*/}
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
