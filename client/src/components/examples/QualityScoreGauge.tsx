import { QualityScoreGauge } from "../QualityScoreGauge";

export default function QualityScoreGaugeExample() {
  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      <QualityScoreGauge score={85} title="High Quality" />
      <QualityScoreGauge score={65} title="Medium Quality" />
      <QualityScoreGauge score={35} title="Low Quality" />
    </div>
  );
}
