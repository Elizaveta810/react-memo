const baseHost = "https://wedev-api.sky.pro/api/v2/leaderboard";
//Получаем список лидеров
export async function getLeaders() {
  const response = await fetch(baseHost);
  if (!response.status === 200) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}
//Добавляем лидера в список
export async function postLeader({ name, time, achievements }) {
  const response = await fetch(baseHost, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      time: time,
      achievements: achievements,
    }),
  });
  if (response.status === 400) {
    throw new Error("Полученные данные не в формате JSON");
  }
  const data = await response.json();
  return data;
}
