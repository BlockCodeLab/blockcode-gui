import Alert from './alert';
import styles from './alerts.module.css';

export default function Alerts({ items }) {
  return (
    <div className={styles.alertsWrapper}>
      <div>
        {items.map((item) => (
          <Alert
            mode={item.mode}
            icon={item.icon}
            message={item.message}
          />
        ))}
      </div>
    </div>
  );
}
