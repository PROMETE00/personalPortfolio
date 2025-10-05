import FloatingBar from '../components/FloatingBar';
import {InfoButtons} from '../components/InfoButtons';

export default function Home() {
  return (
    <>
      <FloatingBar>
        <InfoButtons />
      </FloatingBar>

      {/* contenido de la página debajo, opcional */}
      <main className="pt-40" />
    </>
  );
}
