import os
import datetime
import subprocess

# Configuration
MONGO_URI = "mongodb+srv://your_username:your_password@your_cluster.mongodb.net/healthcare?retryWrites=true&w=majority"
BACKUP_DIR = "./backups"  # Local backup directory
DATABASE_NAME = "healthcare"  # Name of the database to back up

def create_backup():
    try:
        # Create a timestamp for the backup folder
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        backup_path = os.path.join(BACKUP_DIR, f"{DATABASE_NAME}_backup_{timestamp}")

        # Ensure the backup directory exists
        if not os.path.exists(BACKUP_DIR):
            os.makedirs(BACKUP_DIR)

        # Use mongodump to create a backup
        command = [
            "mongodump",
            f"--uri={MONGO_URI}",
            f"--db={DATABASE_NAME}",
            f"--out={backup_path}"
        ]
        subprocess.run(command, check=True)

        print(f"Backup created successfully at: {backup_path}")

    except subprocess.CalledProcessError as e:
        print(f"Error during backup: {e}")
    except Exception as ex:
        print(f"An unexpected error occurred: {ex}")

if __name__ == "__main__":
    create_backup()
