import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import zigZag from "../../img/zig-zag.webp";
import Delete from "../../img/delete.webp";
import "./goods.css";
// import { useTransform, useMotionValue } from 'framer-motion';
import Rating from "@material-ui/lab/Rating";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, "16 Mar, 2019", "10", "$1950"),
  createData(1, "16 Mar, 2019", "20", "$5000"),
  createData(2, "16 Mar, 2019", "5", "$1000"),
  createData(3, "16 Mar, 2019", "15", "$3654"),
  createData(4, "15 Mar, 2019", "11", "$2212"),
  createData(5, "14 Mar, 2019", "5", "$1000"),
  createData(6, "14 Mar, 2019", "15", "$3654"),
  createData(7, "13 Mar, 2019", "11", "$2212"),
];

function preventDefault(event) {
  event.preventDefault();
}

function Remove(event) {
  event.target.closest(".MuiTableRow-root").remove();
}

export default function Orders() {
  const [isCard, setIsCard] = useState(true);
  // const x = useMotionValue(0);
  // const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  return (
    <React.Fragment>
      <span className='chart-header chart-head'>последние продажи</span>
      <Table size='small'>
        <TableBody>
          {rows.map(
            (row) =>
              setIsCard && (
                <TableRow key={row.id}>
                  <TableCell>
                    <div className='order-zigzag'>
                      <img src={zigZag} alt='zig-zag' />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='orders-name'>
                      Куплено <span className='sum'>{row.name}</span>{" "}
                      позиций:Сумма <span className='sum'>{row.shipTo}</span>
                    </div>
                    <span className='orders-date'>{row.date}</span>
                  </TableCell>
                  <TableCell>
                    <Rating
                      name='rating'
                      placeholder='Добавить в избранное'
                      precision={1}
                      max={1}
                    />
                  </TableCell>
                  <TableCell align='right'>
                    <div
                      className='orders-delete'
                      onClick={Remove}
                      title='Удалить'
                    >
                      <img src={Delete} alt='delete' />
                    </div>
                  </TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
      <div className='seeMore'>
        <Link color='primary' href='#' onClick={preventDefault}>
          See more goods
        </Link>
      </div>
    </React.Fragment>
  );
}
