import styles from "./LeaderboardPage.module.css";
import { useEffect, useState } from "react";

import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { getLeaders } from "../../api";
import NoAchiv1 from "../../assets/icons/NoAchiv1.svg";
import GetAchiv1 from "../../assets/icons/GetAchiv1.svg";
import NoAchiv2 from "../../assets/icons/NoAchiv2.svg";
import GetAchiv2 from "../../assets/icons/GetAchiv2.svg";
import ToolTipComponent from "../../components/ToolTip/ToolTipComponent";

export function LeaderboardPage() {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    getLeaders().then(leadersList => {
      setLeaders(leadersList.leaders);
    });
  }, []);
  const navigate = useNavigate();
  const startTheGame = e => {
    e.preventDefault();
    navigate(`/`);
  };

  let i = 1;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Лидерборд</h1>
        <Button onClick={startTheGame}>Начать игру</Button>
      </div>
      <ul className={styles.leaderboard}>
        <div className={styles.leadersItemTitle}>
          <div>Позиция</div>
          <div>Пользователь</div>
          <div>Достижения</div>
          <div>Время</div>
        </div>
        {leaders
          .sort((a, b) => +a.time - +b.time)
          .map(leader => {
            console.log(leader);
            return (
              <li className={styles.leadersItem} key={leader.id}>
                <div className={styles.numberBox}># {i++}</div>
                <div className={styles.nameBox}>{leader.name}</div>
                <div className={styles.achivBox}>
                  {leader.achievements.includes(1) ? (
                    <ToolTipComponent text={"Игра пройдена в сложном режиме"} customClass={styles.toolTipCustom}>
                      <img className={styles.iconBtn} src={GetAchiv1} alt="Игра пройдена в сложном режиме" />
                    </ToolTipComponent>
                  ) : (
                    <img className={styles.iconBtn} src={NoAchiv1} alt="Легкий режим использовался" />
                  )}
                  {leader.achievements.includes(2) ? (
                    <ToolTipComponent text={"Игра пройдена без супер-сил"} customClass={styles.toolTipCustom}>
                      <img className={styles.iconBtn} src={GetAchiv2} alt="Игра пройдена без супер-сил" />
                    </ToolTipComponent>
                  ) : (
                    <img className={styles.iconBtn} src={NoAchiv2} alt="Суперсилы использовались" />
                  )}
                </div>
                <div>
                  {Math.trunc(leader.time / 60)
                    .toString()
                    .padStart("2", "0")}
                  :{(leader.time % 60).toString().padStart("2", "0")}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
