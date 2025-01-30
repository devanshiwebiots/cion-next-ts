import { Col, Row } from "reactstrap";
import { Filters } from "@/utils/Constant";
import { ChevronDown } from "react-feather";
import GridAndListView from "./GridAndListView";
import GridOptions from "./GridOptions";
import Sorting from "./Sorting";
import { useAppDispatch } from "@/Redux/Hooks";
import { setIsFilter } from "@/Redux/Reducer/FilterSlice";

const ProductTotal = () => {
  const dispatch = useAppDispatch();
  return (
    <Row>
      <Col md={6} className='products-total'>
        <GridAndListView />
        <span className='d-none-productlist filter-toggle'>
          {Filters}
          <span className='ms-2' onClick={() => dispatch(setIsFilter())}>
            <ChevronDown className='toggle-data' />
          </span>
        </span>
        <GridOptions />
      </Col>
      <Sorting />
    </Row>
  );
};

export default ProductTotal;
