import { Prose } from "@/registry/react/components/prose";

const Example = () => (
  <Prose>
    <table>
      <thead>
        <tr>
          <th>King&apos;s Treasury</th>
          <th>People&apos;s happiness</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Empty</td>
          <td>Overflowing</td>
        </tr>
        <tr>
          <td>Modest</td>
          <td>Satisfied</td>
        </tr>
        <tr>
          <td>Full</td>
          <td>Ecstatic</td>
        </tr>
      </tbody>
    </table>
  </Prose>
);

export default Example;
