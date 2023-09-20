import React from 'react';
import './App.css';

function Teams() {
  return (
    <section className="teams">
      <h2>Teams Timetable</h2>
      <table className="team-table">
        <thead>
          <tr>
            <th>Teams</th>
            <th>Coach</th>
            <th>Day/Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pokemon</td>
            <td>James Martins</td>
            <td>Monday 3:30pm</td>
          </tr>
          <tr>
            <td>My Singing Monsters</td>
            <td>Haley Johns</td>
            <td>Tuesday 4:00pm</td>
          </tr>
          <tr>
            <td>Ninja Turtles</td>
            <td>Freddy Chang</td>
            <td>Wednesday 5:00pm</td>
          </tr>
          <tr>
            <td>Bakugan</td>
            <td>Yolanda Peters</td>
            <td>Thursday 3:30pm</td>
          </tr>
          <tr>
            <td>Minion Rush</td>
            <td>Jessica Mark</td>
            <td>Friday 4:00pm</td>
          </tr>
          <tr>
            <td>Avatar</td>
            <td>Ray Fuller</td>
            <td>Saturday 9:00am</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Teams;

