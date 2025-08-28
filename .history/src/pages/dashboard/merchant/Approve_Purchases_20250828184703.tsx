"use client"
import {
  Box,
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
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material"
import { Search,  } from "lucide-react"
import { useState } from "react"
const Approve_Purchases = () => {
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