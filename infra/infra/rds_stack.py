import logging
from aws_cdk import (
    aws_rds as rds,
    Stack,
    aws_ec2 as ec2,
)
from constructs import Construct

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class RdsStack(Stack):
    def __init__(self, scope: Construct, id: str, vpc, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        try:
            rds.DatabaseInstance(
                self,
                "ShopPostgresDB",
                engine=rds.DatabaseInstanceEngine.postgres(
                    version=rds.PostgresEngineVersion.VER_16_3
                ),
                instance_type=ec2.InstanceType.of(
                    ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.MICRO  # db.t2.micro is eligible for the AWS Free Tier
                ),
                vpc=vpc,  # Ensure `my_vpc` is defined or passed correctly
                database_name="shop_cart_db",
                allocated_storage=20,  # Set to 20GB to fit within Free Tier
                max_allocated_storage=20,  # Optional: Prevents autoscaling of storage and incurring costs
            )

            logger.info("RdsStack created successfully")
        
        except Exception as err:
            logger.error(f"Error in RdsStack: {err}")

