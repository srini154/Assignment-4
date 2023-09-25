import React from "react";
import "./SuccessBook.css"; // Import your CSS file

function SuccessBook({ selectedDate, selectedGuest }) {
  return (
    <div className="success-book">
      <h2>Success</h2>
      <p>Selected Date : {selectedDate}</p>
      <p>Selected Guest: {selectedGuest}</p>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAmVBMVEX///8AoUv29vYAokr//f/8/Pz5+fkAnkkAnkP8//8Aokj9//0AoEIAnDgAmj8Aokbz+/gVpFUAljLW7OCg1bVYtXwAl0EAli0AkiIFoVbn9O3B4czd8uO43cZFq2fg8OXL59dIq3CBw5hjtoOMx6Axp1yx3MF3u4+Sy6ubzK4ypmZPs3URnE0mrmFzvYhquYCe1L5NrH2dyrPaQ7YiAAAEiklEQVR4nO2aC3OqOBTHEwIkARJe2q54FaqituLt7n7/D7cn+Apt78ztrnJmdvK3Q2eQwZ/nlZODhDg5OTk5OTk5OTk5Of3fJSUc4liiMvSHjBAfXngE5WT69Pz8x6zCYTDK5lOqBKNi9gMPYrFUScoYjXSN4g/jjOblOaUgnsxKHAifZKtEcAMB7igREAwFKZeKs8hAMN1gJchei94OlHGAwFBMqrVO6ZlCLxAQJLzqQ8LOEJGaEJyy2eiEXiyhNgSndE+KlF3dscKAiAnZ6AsDp3qdjc9gtFERvcbEEgciXkOVuJhCtBgQ0EOsr8nBaJqjlMyYWJagUTFHSQ+5VmCBkzcYK7YEgUL6O8WvdYJDjqJopfgtPZIpgjegw90/U3ajgPTACIpXdY1L4xCcLnOr+Q2CioWpoiMLepoiujFw9To6gqkTJU8sS6gdAgQh1TKh15oZibcQhWJqB0UqMBpuSVa2O5ieI9RMCelxy9GIQnOFoYanlinUAaXByzphQSQoLQWRUxuCiTkGBLS6NoTao6weCysywR9TBARC6s4q3FR0GEEhyUHYptA4QfGq+sLNGGw9OC0wKkVM5ufCDc3N8Xjk0/jOhTv+ne6gWp6nJAwgZsfuTo3NaSS33ax+vr/vNgv7rmHw+fJ3fbYEY8dZd/zzPhBmLLl6KrQWRokq2n19WZg879PF2+dTfvCcsq6l9+spZLaBdsV8OQg4ylJFd7U5H4ZAEXok8LyABGEI/YOsuxw+nua9OH+rfLgI3oaLv7DbN1W2KrWaBS02FTG39+AQmP/EHAIZrp/yrqfoDE7S9OfhHXPxf+1ywP57Fd2KAIuU3sqw/whjEviiXhB4ob/Xxy6n1Jghpx1f+YEBCHrSu7RaZZfYtSjS68r3Q2l84oUGQXpBSfmRgw1mOaezGX3JPIsi+DKYv6eY1Ad7bwHd09vcl75HeouYGPGyv3qKLp9BbOQdb/wTQHDySPBFMH9XksiNvVLCAqGhLIKdTWD2X/RVGUcYj3AWcb2Hd+B0EJwuuoctek1EOuBQ68pas0vbUpFYyocs53DTxWCdgt3vS3bbbi3twDGj3UdsxKT5a/TAGky01eXDJoOwUQ8dEZSt3eCbGlmenFLrQcw8eIJWtmKAIdp+TpW9D+gePuWu+TBEBTdO2RYDfzx+T1rlA2swwUtSdTaa6EaYEDS53VdyCNF6PfBHMsrAvxkmLE25fYKN1XQ3wyrKB7ZJn6pR9h8+mQxGRYxapuBqMgLCCWOl6C8kuhE3YlP9C4pkzP1HPMzXG8RuxE0pLCmcfwER5fWYW2Mol4qyTxSwPx9VEiKUfTRH1I4+I8ha9tEYYjH+qKL5kK5cvIyNYLRXHyhQfk+RHQbpmuAMmUl5W1AgRAqUJw/SJ/vbasqSkbP0JmuwGd1rVvEvtL0EKCvQTAHVYXr2SfSG9PS8V9kPNxk1T0oR9VOYLidaZj7mz+GqwjweVLimAGOAT9IWGYLUHeMJtinAGEmE9MsOW7VATpCTdjgPgz7ox9/YBE5OTk5OTk5OTk5OTk531j+Ocj0zOIVwYgAAAABJRU5ErkJggg=="
        alt="Success"
        className="success-icon"
      />
      <p>Thank You, Have a nice Meal</p>
    </div>
  );
}

export default SuccessBook;
