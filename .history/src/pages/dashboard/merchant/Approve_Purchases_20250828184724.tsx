"use client"
import {

  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
 
} from "@mui/material"

const Approve_Purchases = () => {
    const dummyPurchases = [
  { id: 1, customer: "John Doe", item: "Product A", amount: "$120", status: "Pending" },
  { id: 2, customer: "Jane Smith", item: "Product B", amount: "$75", status: "Pending" },
  { id: 3, customer: "David Lee", item: "Product C", amount: "$200", status: "Pending" },
]
    return (
        <div>
           <Grid >
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Approve Purchases
                </Typography>
                <Paper sx={{ overflow: "hidden" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Item</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dummyPurchases.map((purchase) => (
                        <TableRow key={purchase.id}>
                          <TableCell>{purchase.id}</TableCell>
                          <TableCell>{purchase.customer}</TableCell>
                          <TableCell>{purchase.item}</TableCell>
                          <TableCell>{purchase.amount}</TableCell>
                          <TableCell>{purchase.status}</TableCell>
                          <TableCell>
                            <Button variant="contained" color="primary" size="small">
                              Approve
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </CardContent>
            </Card>
          </Grid>
        </div>
    );
};

export default Approve_Purchases;