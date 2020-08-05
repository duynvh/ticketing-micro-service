```
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=duynvh // to 
kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=...
kubectl get secrets // show all secrets
```

Register docker hub with client, auth, tickets
```
example:
docker build -t nguyenvohoangduy/auth .
docker push nguyenvohoangduy/auth
```
