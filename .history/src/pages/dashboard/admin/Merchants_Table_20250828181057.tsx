"use client"
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,

} from "@mui/material"
import { Edit, Delete,} from "@mui/icons-material"
const Merchants_Table = () => {
    return (
        <div>
             <Card>
          <CardContent sx={{ p: 3 }}>
            <Paper sx={{ overflow: "hidden" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "grey.50" }}>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Email</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Phone</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {merchants.map((merchant, index) => (
                    <TableRow
                      key={merchant.id}
                      sx={{
                        "&:hover": { bgcolor: "grey.50" },
                        bgcolor: index % 2 === 0 ? "background.paper" : "grey.25",
                      }}
                    >
                      <TableCell sx={{ color: "text.primary" }}>#{merchant.id}</TableCell>
                      <TableCell sx={{ color: "text.primary" }}>{merchant.name}</TableCell>
                      <TableCell sx={{ color: "text.secondary" }}>{merchant.email}</TableCell>
                      <TableCell sx={{ color: "text.secondary" }}>{merchant.phone}</TableCell>
                      <TableCell>
                        <Chip
                          label={merchant.status}
                          size="small"
                          color={merchant.status === "Active" ? "secondary" : "default"}
                          variant={merchant.status === "Inactive" ? "outlined" : "filled"}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton color="primary" size="small">
                          <Edit />
                        </IconButton>
                        <IconButton color="secondary" size="small">
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </CardContent>
        </Card>
        </div>
    );
};

export default Merchants_Table;