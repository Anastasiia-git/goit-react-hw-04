import s from "./ErrorMessage.module.css"
function ErrorMessage() {
  return <div className={s.error}>"😢 We found nothing."</div>;
}

export default ErrorMessage