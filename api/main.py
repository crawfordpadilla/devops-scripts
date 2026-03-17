import os
import sys
import json
import logging

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def load_config():
    """Loads the configuration from the config.json file"""
    try:
        with open('config.json') as f:
            return json.load(f)
    except FileNotFoundError:
        logging.error("Config file not found")
        sys.exit(1)
    except json.JSONDecodeError:
        logging.error("Invalid JSON in config file")
        sys.exit(1)

def main():
    """Main function"""
    config = load_config()
    if not os.path.exists(config['output_dir']):
        os.makedirs(config['output_dir'])
    logging.info("Config loaded, starting main process")

if __name__ == "__main__":
    main()