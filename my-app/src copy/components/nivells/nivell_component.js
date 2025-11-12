import { Grid, Col } from "../grid/grid";
import Text_Type from "../text_type";
import Button from "../button";
import Board from "../board";

export default function Nivell_Component({
  title,
  enigma_ubication,
  pregunta,
  onComprovar,
  children,
}) {
  return (
    <div>
      <Grid>
        <Col>
          <Text_Type variant="h2">{title}</Text_Type>

          <Text_Type>Dirigeix-te a</Text_Type>
          <Text_Type variant="highlight">{enigma_ubication}</Text_Type>

          <Text_Type>Resol l'enigma:</Text_Type>
          <Board>
            <Text_Type>{pregunta}</Text_Type>
          </Board>

          {children}

          <Button onClick={onComprovar}>Comprovar</Button>
        </Col>
      </Grid>
    </div>
  );
}
