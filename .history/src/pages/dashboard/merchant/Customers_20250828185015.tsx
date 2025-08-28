"use client"
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemText,

} from "@mui/material"
const Customers = () => {
    return (
        <div>
             <Grid >
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Lookup Customer
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Search customer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{ startAdornment: <Search size={18} /> }}
                  sx={{ mb: 2 }}
                />
                <Paper sx={{ maxHeight: 250, overflow: "auto" }}>
                  <List>
                    {filteredCustomers.length > 0 ? (
                      filteredCustomers.map((customer) => (
                        <ListItem key={customer.id}>
                          <ListItemText
                            primary={customer.customer}
                            secondary={`${customer.item} - ${customer.amount}`}
                          />
                        </ListItem>
                      ))
                    ) : (
                      <ListItem>
                        <ListItemText primary="No results found" />
                      </ListItem>
                    )}
                  </List>
                </Paper>
              </CardContent>
            </Card>
          </Grid>
        </div>
    );
};

export default Customers;