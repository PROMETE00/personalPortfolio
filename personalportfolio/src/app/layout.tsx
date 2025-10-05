import type {Metadata} from 'next';
import {DEFAULT_BODY_CLASSNAME} from '../components/Wrapper';
import {App} from '../components/App';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import '../styles/globals.scss';
import AppShell from '@/components/AppShell';

export const metadata: Metadata = {
    title: 'My Portfolio',
    description: 'A personal portfolio website showcasing my projects and skills.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="es">
            <body className={DEFAULT_BODY_CLASSNAME}>
                <AppShell>{children}</AppShell>
            </body>
        </html>
    );
}
