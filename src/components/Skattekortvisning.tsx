import styles from "./SkattekortVisning.module.css";
import SkattekortTitle from "./SkattekortTitle";
import Arbeidsgiver from "./Arbeidsgiver";
import Tilleggsopplysningsliste from "./Tilleggsopplysningsliste";
import Arbeidstaker from "./Arbeidstaker";
import Skattekortdata from "../models/Skattekortdata";

type SkattekortvisningProps = {
  data: Skattekortdata;
};

const Skattekortvisning = ({ data }: SkattekortvisningProps) => {
  const skattekort = data.skattekortListe[0].arbeidsgiver[0].arbeidstaker[0].skattekort;
  const forskuddstrekk = skattekort.forskuddstrekk;
  const arbeidsgiver = data.skattekortListe[0].arbeidsgiver[0];
  const arbeidstaker = arbeidsgiver.arbeidstaker[0];

  return (
    <div className={styles.skattekort}>
      <div className={styles.rightTitle}>
        <SkattekortTitle ar={arbeidsgiver.arbeidstaker[0].inntektsaar} utstedt={skattekort.utstedtDato} />
      </div>
      <div className={styles.leftColumn}>
        <Arbeidsgiver identifikator={arbeidsgiver.arbeidsgiveridentifikator} />
        {arbeidstaker.tilleggsopplysning && (
          <Tilleggsopplysningsliste tilleggsopplysninger={arbeidstaker.tilleggsopplysning} />
        )}
      </div>
      <div className={styles.rightColumn}>
        <Arbeidstaker arbeidstaker={arbeidstaker.arbeidstakeridentifikator} forskuddstrekk={forskuddstrekk} />
      </div>
    </div>
  );
};

export default Skattekortvisning;
